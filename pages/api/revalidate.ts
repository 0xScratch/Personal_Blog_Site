// https://<your-site.com>/api/revalidate?secret=<token>

/*
    There's a catch, when in dev mode or building stuff, use always http
    In production, you can use https
*/

// http://localhost:300/api/revalidate?path=/&secret=cd529b6f7a11c47dd6b89626aff88e6a

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN){
        return res.status(401).json({ message: 'Invalid token' })
    }

    const path = req.query.path as string
    
    await res.revalidate(path)

    return res.json({ revalidated: true })
}