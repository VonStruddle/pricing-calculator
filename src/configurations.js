export const getPlansSettings = content => {
    const plans = {};
    for (const planIdx in content.nbOfPlans) {
        plans[`plan${planIdx}PriceMonth`] = {
            label: { en: `Plan ${planIdx} /month`, fr: `Plan ${planIdx} /mois` },
            type: 'Number',
            path: `plans[${planIdx - 1}].prices[0]`,
        };
        plans[`plan${planIdx}PriceYear`] = {
            label: { en: 'Plan ${planIdx} /year', fr: 'Plan ${planIdx} /an' },
            type: 'Number',
            path: `plans[${planIdx}].prices[1]`,
        };
        plans[`plan${planIdx}PriceFont`] = {
            label: { en: `Plan ${planIdx} font size`, fr: `Plan ${planIdx} taille` },
            type: 'Number',
            path: `plans[${planIdx}].priceStyle.fontSize`,
        };
        plans[`plan${planIdx}Color`] = {
            label: { en: `Plan ${planIdx} color`, fr: `Plan ${planIdx} couleur` },
            type: 'Color',
            path: `plans[${planIdx}].color`,
        };
        plans[`plan${planIdx}PriceColor`] = {
            label: { en: `Plan ${planIdx} price color`, fr: `Plan ${planIdx} couleur prix` },
            type: 'Color',
            path: `plans[${planIdx}].priceStyle.color`,
        };
    }
    return plans;
};

/*
"plan1PriceMonth": {
    "label": { "en": "Plan 1 /month", "fr": "Plan 1 /mois" },
    "type": "Number",
    "path": "plans[0].prices[0]"
},
"plan1PriceYear": {
    "label": { "en": "Plan 1 /year", "fr": "Plan 1 /an" },
    "type": "Number",
    "path": "plans[0].prices[1]"
},
"plan1PriceFont": {
    "label": { "en": "Plan 1 font size", "fr": "Plan 1 taille" },
    "type": "Number",
    "path": "plans[0].priceStyle.fontSize"
},
"plan1Color": {
    "label": { "en": "Plan 1 color", "fr": "Plan 1 couleur" },
    "type": "Color",
    "path": "plans[0].color"
},
"plan1PriceColor": {
    "label": { "en": "Plan 1 price color", "fr": "Plan 1 couleur prix" },
    "type": "Color",
    "path": "plans[0].priceStyle.color"
},
*/
