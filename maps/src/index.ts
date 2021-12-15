import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU - ztm
// AIzaSyATEGLLtMV5BG5xaQ6ogurXsvwk08CD99k - rasul

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");
customMap.addMarker(user);
customMap.addMarker(company);

console.log(user);
console.log(company);
