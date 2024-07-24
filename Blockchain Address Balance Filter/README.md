# Blockchain Address Balance Filter

## Overview
The Blockchain Address Balance Filter is a SQL-based project that retrieves addresses from a trades table based on their token balances and trade activity. The project calculates the total balance in USD for each address, filters addresses with a balance of 500 USD or more, and selects those involved in trades after a specific block height.

## Features
- Convert token balances to USD equivalents.
- Calculate total balances for each address.
- Filter addresses based on balance tshresholds.
- Select addresses involved in recent trades.