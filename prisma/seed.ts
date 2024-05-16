async function main() {
    // No-op
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // Ensure any necessary cleanup
    });
