SELECT trades.address
FROM 
(
    SELECT address, SUM(amount_in_usd) AS total_balance
    FROM 
    (
        SELECT address,
            CASE
                WHEN denom = 'usdc' THEN amount * 0.000001
                WHEN denom = 'swth' THEN amount * 0.00000005
                WHEN denom = 'tmz' THEN amount * 0.003
            END AS amount_in_usd
        FROM balances
    ) AS balances_usd
    GROUP BY address
    HAVING SUM(amount_in_usd) >= 500
) AS balances_filtered
INNER JOIN 
(
    SELECT DISTINCT address 
    FROM trades 
    WHERE block_height > 730000
) AS trades
ON trades.address = balances_filtered.address;
