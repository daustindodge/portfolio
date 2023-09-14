import React from "react";

export default function Heading({children})
{
    return (
        <h2 className="text-3xl font-medium capatalize mb-8 text-center">{children}</h2>
    )
}