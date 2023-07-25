
export function angleBetween(angle: number, start:number, end: number): boolean{
    return ((angle > start ) && (angle < end || angle === end))
}

export function unrevolve(angle: number): number{
    while(angle>360){
      angle = angle - 360 
    }
    while(angle<0){
      angle = angle + 360
    }
    return angle
}

export function sequence(number: number){
    return Array.from(Array(number).keys())
}

export function toDegrees(rads: number): number{
  return rads * 180 / Math.PI
}

export function arctan(dx: number, dy: number){
  let angle = toDegrees(
    Math.atan(
      Math.abs(dy)/Math.abs(dx)
    )
  );
  if(dx>0){
    if(dy<0) { angle = 360 - angle; }
  } else{
    if(dy>0){ angle = 180 - angle; } 
    else{ angle = 180 + angle; }
  }
  return angle;
}