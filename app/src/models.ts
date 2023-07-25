import { IconConfig, MetaConfig } from "./properties";
import { ImgConfig } from "src/properties";

export interface Inventory{
    title: string;
    description: string;
    price: number;
    previews?: ImgConfig[];
};

export interface Dept{
    title: string;
    inventory: Inventory[];
};

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

export interface App{
    title: string;
    description: string;
    assets: ImgConfig[];
    icons?: IconConfig[];
    transition_duration: number;
    longitude: number;
    latitude: number;
    maps_url: string;
  }