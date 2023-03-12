require ('dotenv').config();
const { token } = process.env;
const { Client, Collection } = require('discord.js');
const fs = require('fs');