import fetch from 'node-fetch';

async function testOrder() {
    const response = await fetch('http://localhost:3001/api/shopify/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ softwareId: 'logic', price: 99.99 })
    });
    const data = await response.json();
    console.log(data);
}

testOrder();