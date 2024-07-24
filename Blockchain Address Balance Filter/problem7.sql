--Retrieve addresses from the 'trades' table.
SELECT trades.address
FROM 
(
    --Calculate the total balance in USD for each address.
    SELECT address, SUM(amount_in_usd) AS total_balance
    FROM 
    (
        --Convert the balance of each row into its equivalent value in USD.
        SELECT address,
            --CASE statement to handle different denoms, we multiply the amount by its equivalent value in USD.
            CASE
                WHEN denom = 'usdc' THEN amount * 0.000001
                WHEN denom = 'swth' THEN amount * 0.00000005
                WHEN denom = 'tmz' THEN amount * 0.003
            END AS amount_in_usd
        FROM balances
    ) AS balances_usd
    -- After converting the balances, group the results by 'address' and sum the USD amounts to get the total balance for each address.
    GROUP BY address
    -- Addresses with a total balance of 500 or more
    HAVING SUM(amount_in_usd) >= 500
) AS balances_filtered

INNER JOIN 
(
    --SELECT distinct addresses that have a 'block_height' greater than 730000.
    SELECT DISTINCT address 
    FROM trades 
    WHERE block_height > 730000
) AS trades
--Join the first and the second subqueries on 'address', final result will include addresses that are present in both subqueries.
ON trades.address = balances_filtered.address;
