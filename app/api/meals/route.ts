
export async function GET() {
    const result = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
    const data = await result.json()

    return Response.json(data)
}