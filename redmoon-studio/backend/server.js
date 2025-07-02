import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';
import fs from 'fs';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/trustpilot', async (req, res) => {
  const apiKey = process.env.TRUSTPILOT_API_KEY;
  const businessUnitId = process.env.TRUSTPILOT_BUSINESS_UNIT_ID;

  if (!apiKey || !businessUnitId) {
    return res.status(500).json({ error: 'Clés API Trustpilot non configurées' });
  }

  try {
    // Données simulées pour la démonstration
    const simulatedData = {
      score: 4.8,
      numberOfReviews: 127,
      stars: { 5: 89, 4: 28, 3: 7, 2: 2, 1: 1 },
      recentReviews: [
        { id: 1, rating: 5, title: "Service exceptionnel !", text: "RedMoon Studio a transformé mes pistes audio de manière incroyable.", author: "Marie L.", date: "2024-01-15", verified: true },
        { id: 2, rating: 5, title: "Qualité professionnelle", text: "Travail de très haute qualité, délais respectés et communication excellente.", author: "Thomas R.", date: "2024-01-10", verified: true },
        { id: 3, rating: 4, title: "Nique ta mere", text: "Bon rapport qualité-prix, équipe à l'écoute et résultat final très satisfaisant.", author: "Sophie M.", date: "2024-01-08", verified: true }
      ]
    };
    res.json(simulatedData);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données Trustpilot' });
  }
});

app.get('/api/shopify', async (req, res) => {
  const storeUrl = process.env.SHOPIFY_STORE_URL;
  const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!storeUrl || !accessToken) {
    return res.status(500).json({ error: 'Identifiants Shopify non configurés' });
  }

  const query = `
      {
        products(first: 3) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `;

  try {
    const response = await fetch(`${storeUrl}/api/2023-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': accessToken,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erreur Shopify API:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données Shopify' });
  }
});

app.post('/api/shopify/order', async (req, res) => {
  const { softwareId, price } = req.body;
  if (!softwareId || price === undefined || price === null) {
    return res.status(400).json({ error: 'Missing softwareId or price' });
  }

  try {
    let orders = [];
    const ordersFile = './orders.json';
    if (fs.existsSync(ordersFile)) {
      const data = fs.readFileSync(ordersFile, 'utf-8');
      orders = JSON.parse(data);
    }

    orders.push({ softwareId, price, date: new Date().toISOString() });

    fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));

    res.json({ message: 'Order stored locally', softwareId, price });
  } catch (error) {
    res.status(500).json({ error: 'Error storing order' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});