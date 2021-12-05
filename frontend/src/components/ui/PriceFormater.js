export default function PriceFormater(props)
{
     let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',

    });
    return (<>
        {formatter.format(props.price)+' ' }
    </>)
}