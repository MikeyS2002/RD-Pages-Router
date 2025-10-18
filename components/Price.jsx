import React from "react";

const Price = ({ amount, currency = "EUR", className = "" }) => {
    const formattedPrice = new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
        .format(amount)
        .replace(/\s/g, "");

    return <span className={className}>{formattedPrice}</span>;
};

export default Price;
