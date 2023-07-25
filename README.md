# AWS Angular Starter Kit

This repository is curated by the [Cumberland Cloud](https://cumberland-cloud.com). It contains everything you need to deploy a responsive, search-optimized **Angular** single-page-application onto an **AWS** environment.

## CloudFormation

The _cloudformation.yml_ template in the repository will provision all the resources you need to deploy the **Angular** app to the cloud. 

The next section gives a high-level overview. See [Angular on AWS](https://cumberland-cloud.com/blog/article/angular_on_aws) for more information on the **CloudFormation** template and how to use it.

### Overview

TODO

### Quickstart

If you have a domain, a hosted zone ID and an **ACM** SSL certificate ARN **and** you have the [AWS CLI installed and configured](), you can use the helper script `provision-stack` to post the template to **CloudFormation**,

```bash
./scripts/provision-stack
```

The script will prompt you to enter all of the previously mentioned information. Alternatively, you can copy the `.sample.env` file into a new `.env` file and adjust the variables there. This file is included in the `.gitignore`, so the values you store in this file will not be committed to the repo.

```bash
cp .sample.env .env
```

## CI/CD

The **CloudFormation** template will provision a **CodeCommit**-**CodePipeline**-**CodeBuild** CI/CD pipeline. You will need to grab the SSH url of the **CodeCommit** repo that was provisioned and add it as the origin to this repository. Then, push the current head of the master branch to the new remote to kick off the pipeline,

```bash
git remote add codecommit <ssh-url>
git push --set-upstream codecommit master
```

The pipeline will use the _buildspec.yml_ in the project root to build and deploy the **Angular** application to an **S3**-**CloudFront** distribution. See [CI/CD with Angular on AWS]() for more a thorough explanation of all the different components of the pipeline.

## Configuration

TODO

### AppConfig

TODO

1. **title**: title given to the application. Used to configure controls, tooltips, etc. If a page is missing SEO attributes, the application will default to this title.

2. **description**: description given to the application. Used to configure controls, tooltips, etc. If a page is missing SEO attributes, the application will default to this description.

1. **orientation**: `vertical | vertical_alt | horizontal | horizontal`. Controls the orientation and layout of the application template.

### NavConfig

## Angular Universal

[Angular Universal](https://angular.io/guide/universal) is installed in the application so the SPA can be prerendered. The following command run from the _app_ directory will generate the prerendered distribution in the _/app/dist_ folder,

```bash
npm run prerender
```

The prerendering procedure generates an _index.html_ for each route in the application. The routing information is injected in the prerendering procedure from the _/app/routes.txt_ file. When new pages are added, the _/app/routes.txt_ file must be updated to include that route on a new line.

### SEOService

This services uses the configuration file _/app/src/nav.config.ts_ to inject `meta` and `og` attributes in the HTML document during the prerendering process. This assists web crawlers and search engine bots in discovering the site. 

The _nav.config.ts_ uses the interface defined in _/app/src/models.ts_ to configure the SEO attributes,

```javascript
export interface Nav {
    path: string;
    nav_id?: string;
    nav_title?: string;
    page_title?: string;
    page_description?: string;
    group?: string;
    menu?: boolean;
    data?: any;
    children?: Nav[];
    meta?: MetaConfig[];
}
```

The `data` property of `Nav` is the [json+ld structured data](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data) used by **Google** to [implement rich search result widgets](https://developers.google.com/search/docs/advanced/structured-data/search-gallery). 

The `MetaConfig` is another interface defined in the _/src/properties.ts_ file,

```javascript
export interface MetaConfig {
  property: string;
  content: string;
}
```

This array of objects consists of the aforementioned `og` and `meta` attributes that will be injected during prerendering.

### MetaService

This service delivers information about the execution environment to the application.

To help with designing responsive web applications, `MetaService` will emit an `Observable` called `screenWidth` everytime the viewport size hits one of the _"media breakpoints"_: `xs`, `s`, `md`, `lg`, `xl` or `xxl`. These breakpoints are emitted under the following conditions,

```javascript
if (width < 576) {
    this.mediaBreakpoint.next('xs');
} else if (width >= 576 && width < 768) {
    this.mediaBreakpoint.next('sm');
} else if (width >= 768 && width < 992) {
    this.mediaBreakpoint.next('md');
} else if (width >= 992 && width < 1200) {
    this.mediaBreakpoint.next('lg');
} else if (width >= 1200 && width < 1600) {
    this.mediaBreakpoint.next('xl');
} else {
    this.mediaBreakpoint.next('xxl');
}
```

where `width` is measured in pixels.

`MetaService` also contains methods for determining whether the application is executing on the server (i.e. during prerendering), or on the browser. These methods are `isBrowser()` and `isServer()`. **NOTE**: `isBrowser() == !isServer()`. These methods come in handy if you need to call the `document` or `window` in the application. Since the application is prerendered, any unchecked calls to `document` or `window` will result in the prerender erring out. Therefore, before querying the DOM or invoking a window listener or whatever, you should wrap the call in a check to make sure the application is executing on the browser, i.e., 

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private meta: MetaService){}

    public domFunction(): void{
        if(this.meta.isBrowser()){
            document.getElementById('some-id')
        }
    }
}
```


### CloudFront Edge Handlers

When an **Angular** application is prerendered, it will generate an _index.html_ for each route, as opposed to a normal **Angular** build that compiles a singe _index.html_ and bootstraps the entire application from that entrypoint. The difference in this setup is how the server handles the initial request. In a normal application, every request, regardless of path, gets served the root _index.html_, and **Angular** handles the path with in-app routing. With a prerendered application, each request URI is routed to a handler on the server that returns that page's _index.html_ before **Angular** has a chance to intercede.

In order to accomodate this difference, the **CloudFront** distribution will need to be setup to append _index.html_ to the end of all routes, so the distribution will serve the correct index on each path. If unchanged, the default configuration will serve the root _index.html_ and then pass the routing to the **Angular** app, instead of loading that route's index.html and bootstrapping from there. This would effectively make the prerendering process moot, since the static html generated by the prerender would not be served by the **CloudFront** distribution.

The script _/scripts/cloudfront/edge\_handler.js_ is added to the [Edge Function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html) middleware of the **CloudFront** distribution during the **CI/CD** pipeline build to solve this problem. 

If a new path is added to the application, the paths in this script will need updated to reflect this change. 

## Angular Material

TODO

## Preloaded Assets

TODO

### MatIconRegistry

TODO

### Themes

TODO

## HammerJS

TODO

## sitemap.xml

