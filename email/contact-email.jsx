import React from "react";
import {Tailwind} from "@react-email/components";
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components";

export default function ContactEmail({message, email})
{
    return (
        <Html>
            <Head>
                <Preview>New message from your portfolio site</Preview>
                <Tailwind>
                    <Body className="bg-gray-100">
                        <Container>
                            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                                <Heading>You received the following message from the contact form</Heading>
                                <Text>{message}</Text>
                                <Hr />
                                <Text>The sender's email is: {email}</Text>
                            </Section>
                        </Container>
                    </Body>
                </Tailwind>
            </Head>
        </Html>
    )
}