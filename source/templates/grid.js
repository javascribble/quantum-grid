export default `
<style>
    table {
        border-collapse: collapse;
    }

        table thead th {
            text-align: left;
        }

        table tbody tr:nth-child(2n + 1) {
            background-color: var(--secondary-background-color);
        }

        table tbody td {
            padding: var(--space-small);
            border: solid var(--border-size) var(--border-color);
        }

        table tfoot td {
            border: 0;
        }
</style>
`;