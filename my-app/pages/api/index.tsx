import { localCats } from "../../data";
// import { localCats } from "../../data";

// export function handler(req: any, res: any) {
//   res.status(200).json(localCats);
// }

export function newHandler(req: any, res: any) {
  res.status(200).json(localCats);
}
