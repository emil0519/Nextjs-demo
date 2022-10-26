import { localCats } from "../../data";

export default function handler({ query: { id } }: any, res: any) {
  const filtered = localCats.filter((item: any) => item.id === id);
  if (filtered.length > 0) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `Cat with id of ${id} is not found` });
  }
}
