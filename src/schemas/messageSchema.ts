  import { z } from "zod"; 


export const  messageSchema =  z.object({
    content: z.string()
    .min(10, { message: "content must be at least of 10 charaters" 
    })
            .max(300, { message: "content must be at most of 1000 charaters" })

  })  