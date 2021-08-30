function* createIDGenerator (): IterableIterator<number> {
    let id = 1;

    while (true) {
        yield id++;
    }
}

const IDGenerator = createIDGenerator();

export default IDGenerator;