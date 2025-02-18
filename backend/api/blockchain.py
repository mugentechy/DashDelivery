from api.block import Block

class Blockchain:
    def __init__(self, difficulty=2):
        self.chain = []
        self.unconfirmed_transactions = []  # Transactions waiting to be added
        self.difficulty = difficulty  # Difficulty level for Proof of Work
        self.genesis_block()

    def genesis_block(self):
        transactions = []
        genesis_block = Block(transactions, "0")
        genesis_block.mine_block(self.difficulty)  # Mine the genesis block
        self.chain.append(genesis_block)

    def add_transaction(self, transaction):
        """Adds a transaction to the unconfirmed transactions list."""
        self.unconfirmed_transactions.append(transaction)

    def mine_pending_transactions(self):
        """Mines all unconfirmed transactions and adds them to a new block."""
        if not self.unconfirmed_transactions:
            print("No transactions to mine.")
            return False

        new_block = Block(self.unconfirmed_transactions, self.chain[-1].hash)
        new_block.mine_block(self.difficulty)
        self.chain.append(new_block)

        # Clear the unconfirmed transactions list after successful mining
        self.unconfirmed_transactions = []
        return True

    def print_blocks(self):
        for i, current_block in enumerate(self.chain):
            print(f"Block {i}")
            current_block.print_block()

    def validate_chain(self):
        """Validates the blockchain to ensure all blocks are properly linked."""
        for i in range(1, len(self.chain)):
            current = self.chain[i]
            previous = self.chain[i - 1]

            if current.hash != current.generate_hash():
                print("Current hash does not equal generated hash")
                return False

            if current.previous_hash != previous.hash:
                print("Previous block hash does not match stored previous hash")
                return False

        return True
