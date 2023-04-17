import { Request, Response } from "express";
import * as db from "../db";
import { validate } from "./validator"

export const createBook = async (req: Request, res: Response) => {
    const { title, author, price } = req.body;
    if(validate(title) == false)
    {
        res.status(422).json({ status: "failed: title contains forbidden characters."});
    }
    else if(validate(author) == false)
    {
        res.status(422).json({ status: "failed: author contains forbidden characters."});
    }
    else if(validate(price) == false)
    {
        res.status(422).json({ status: "failed: price contains forbidden characters."});
    }
    else
    {
        await db.createBook(title, author, price);
        res.status(201).json({ status: "success" });
    }
}

export const getPrice = async (req: Request, res: Response) => {
    const { title, author } = req.body;
    if(validate(title) == false)
    {
        res.status(422).json({ status: "failed: title contains forbidden characters."});
    }
    else if(validate(author) == false)
    {
        res.status(422).json({ status: "failed: author contains forbidden characters."});
    }
    else
    {
        const bid = await db.getBookId(title, author);
        const price = await db.getBookPrice(bid);
        res.status(200).json({ price });
    }
}
