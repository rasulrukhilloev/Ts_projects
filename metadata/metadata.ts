import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.getMetadata("note", plane);
//// ts-node metadate.ts - to run as TS

@printMetadata
class Plane {
  color: string = "red";

  @markFunction("Hi There")
  fly(): void {
    console.log("rrrr");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
console.log(secret);
