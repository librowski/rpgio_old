const { NODE_ENV } = process.env;

const isDev = () => NODE_ENV === 'development';
const isTest = () => NODE_ENV === 'test';

module.exports = { isDev, isTest };
