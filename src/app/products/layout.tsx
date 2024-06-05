import React from "react";

export default function ProductDetails({children,

}: {children: React.ReactNode}
){
    return(
        <div>
            <p>This layout is specific for Products page</p>
            {children}
            <p>something to be displayed after children </p>
        </div>
    )
}