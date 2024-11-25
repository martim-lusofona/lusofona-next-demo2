import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const result = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
    const data = await result.json()

    return Response.json(data)
}