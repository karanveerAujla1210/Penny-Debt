#!/usr/bin/env node
/**
 * scripts/mongo-ping.js
 * Usage:
 *  - Set env var `MONGODB_URI` (recommended)
 *  - Or pass the URI as first argument: `node scripts/mongo-ping.js "mongodb+srv://..."`
 *
 * This script pings the MongoDB deployment to verify connectivity.
 */

const { MongoClient, ServerApiVersion } = require('mongodb');

const uriFromArg = process.argv[2];
const uri = process.env.MONGODB_URI || uriFromArg;

if (!uri) {
  console.error('\nERROR: No MongoDB URI provided.');
  console.error('Set environment variable `MONGODB_URI` or pass the URI as the first argument.');
  console.error('\nExample (PowerShell):');
  console.error("$env:MONGODB_URI='mongodb+srv://user:pass@cluster0...'; node scripts/mongo-ping.js");
  process.exit(1);
}

async function run() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();

    // Ping the admin database
    const res = await client.db('admin').command({ ping: 1 });
    console.log('Ping response:', res);

    // Optionally list databases (useful for verification)
    const adminDb = client.db().admin();
    const dbs = await adminDb.listDatabases();
    console.log('\nDatabases on server:');
    dbs.databases.forEach(d => console.log(' -', d.name));

    console.log('\n✅ Successfully connected to MongoDB.');
  } catch (err) {
    console.error('\n❌ MongoDB connection failed:');
    console.error(err.message || err);
    process.exitCode = 2;
  } finally {
    try { await client.close(); } catch (e) { /* ignore */ }
  }
}

run().catch(err => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
