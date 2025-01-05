
import zod from "zod";

const a=zod.object({title:zod.string(),description:zod.string()});
const update=zod.object({id:zod.string()});

export {a,update};