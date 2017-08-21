/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    const triplets = new Map();
    const [positives, negatives] = _.partition(nums, (num) => num >= 0);
    const positivesLookup = new Map();
    const negativesLookup = new Map();
    for (let i = 0; i < positives.length; i++) {
        positivesLookup.set(positives[i], true);
    }
     for (let i = 0; i < negatives.length; i++) {
        negativesLookup.set(negatives[i], true);
    }

    // Create a pair from positives and check if there's a complement in negatives.
    if (positives.length >= 2 && negatives.length >= 1) {
        for (let i = 0; i < positives.length - 1; i++) {
            for (let j = i + 1; j < positives.length; j++) {
                const complement = (positives[i] + positives[j]) * -1;
                if (negativesLookup.has(complement)) {
                    const triplet = [positives[i], positives[j], complement].sort();
                    triplets.set(`${triplet[0]}, ${triplet[1]}, ${triplet[2]}`, triplet);
                }
            }
        }
    }

    // Create a pair from negatives and check if there's a compliment in positives.
    if (negatives.length >= 2 && positives.length >= 1) {
        for (let i = 0; i < negatives.length - 1; i++) {
            for (let j = i + 1; j < negatives.length; j++) {
                const complement = (negatives[i] + negatives[j]) * -1;
                if (positivesLookup.has(complement)) {
                    const triplet = [negatives[i], negatives[j], complement].sort();
                    triplets.set(`${triplet[0]}, ${triplet[1]}, ${triplet[2]}`, triplet);
                }
            }
        }
    }

    const zeros = positives.filter((num) => num === 0);
    if (zeros.length >= 3) {
        triplets.set(`0, 0, 0`, [0, 0, 0]);
    }

    return Array.from(triplets.values());
};
