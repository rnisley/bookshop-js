import { Request, Response } from "express";
import * as db from "../db";
import { validate } from "./validator";

export const createCustomer = async (req: Request, res: Response) => {
    const { name, shippingAddress } = req.body;
    if(validate(name) == false)
    {
        res.status(422).json({ status: "failed: name contains forbidden characters."});
    }
    else if(validate(shippingAddress) == false
    {
        res.status(422).json({ status: "failed: address contains forbidden characters."});
    }
    else
    {
        await db.createCustomer(name, shippingAddress);
        res.status(201).json({ status: "success" });
    }
}

export const updateCustomerAddress = async (req: Request, res: Response) => {
    const { cid, address } = req.body;
    if(validate(cid) == false)
    {
        res.status(422).json({ status: "failed: id contains forbidden characters."});
    }
    else if (validate(address) == false)
    {
        res.status(422).json({ status: "failed: address contains forbidden characters."});
    }
    else
    {
        await db.updateCustomerAddress(cid, address);
        res.status(200).json({ status: "success" });
    }
}

export const getCustomerBalance = async (req: Request, res: Response) => {
    const { cid } = req.body;
    if(validate(cid) == false)
    {
        res.status(422).json({ status: "failed: id contains forbidden characters."});
    }
    else
    {
        const balance = await db.customerBalance(cid);
        res.status(200).json({ balance });
    }
}
