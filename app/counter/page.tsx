'use client'

import { useEffect, useState } from "react"
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";

export default function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("render Done")
    }, [])

    useEffect(() => {
        console.log("valor do counter alterado", counter)
    }, [counter])

    return <>
        <Card className="max-w-[400px] m-20">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">Counter</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="flex justify-center align-center m-10">
                    <p className="text-2xl">{counter}</p>
                </div>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-center align-center ">
                <Button onClick={() => {
                    setCounter(counter + 1)
                }}>
                    Aumentar Counter
                </Button>
            </CardFooter>
        </Card>
    </>
}