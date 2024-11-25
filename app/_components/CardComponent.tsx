import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";


interface CardProps {
    name: string
    imgSrc: string
}

export default function CardComponent(props: CardProps) {
    return <>
        <Card className="py-4 m-10">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{props.name}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={props.imgSrc}
                    width={270}
                />
            </CardBody>
        </Card>
    </>
}