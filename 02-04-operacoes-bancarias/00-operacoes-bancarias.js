const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)
    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else {
        if (transaction.type === 'debit') {
            user.balance -= transaction.value
        }
    }
}

function getHigherTransactionByType(transactionType) {
    let higherTransaction
    for (transaction of user.transactions) {
        if (transaction.type === transactionType) {
            if (!higherTransaction || transaction.value > higherTransaction.value) {
                higherTransaction = transaction
            }
        }
        
        // if (!higherTransaction) {
        //     if (transaction.type === transactionType) {
        //         higherTransaction = transaction
        //     }
        // } else {
        //     if (transaction.type === transactionType
        //     && transaction.value > higherTransaction.value) {
        //         higherTransaction = transaction
        //     }
        // }
    }
    
    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0
    for (transaction of user.transactions) {
        sum += transaction.value
    }
    return sum/user.transactions.length
}

function getTransactionsCount() {
    let creditsCount = 0
    let debitsCount = 0
    for (transaction of user.transactions) {
        if (transaction.type === 'credit') {
            creditsCount += 1
        } else {
            if (transaction.type === 'debit') {
                debitsCount += 1
            }
        }
    }
    
    return {credit: creditsCount, debit: debitsCount}
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }
