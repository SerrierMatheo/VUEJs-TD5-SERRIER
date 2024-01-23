// tools.js

export default {
    install(Vue, options) {
        Vue.mixin({
            methods: {
                dateToDB(date) {
                    const [day, month, year] = date.split('/');
                    return `${year}-${month}-${day}`;
                },
                dbDateToFr(dbDate) {
                    const [year, month, day] = dbDate.split('-');
                    return `${day}/${month}/${year}`;
                },
                dbDateHourToFr(dbDate) {
                    const [datePart, timePart] = dbDate.split(' ');
                    const [year, month, day] = datePart.split('-');
                    return `${day}/${month}/${year} ${timePart}`;
                },
                formatAmount(amount) {
                    const formattedAmount = new Intl.NumberFormat('fr-FR', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 2,
                    }).format(amount);

                    return formattedAmount;
                },
                cutText(text, maxLength) {
                    if (text.length <= maxLength) {
                        return text;
                    } else {
                        return text.substring(0, maxLength) + '…';
                    }
                },
            },
            directives: {
                focus: {
                    inserted: (el) => {
                        el.focus();
                    }
                },
            },
        });
    },
};
