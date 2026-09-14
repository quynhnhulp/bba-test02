let navigatorHome = "Luffy";
const currentHakiLevel = 3;
const meat = [
    { island: "Island A", amount: 15 },
    { island: "Island B", amount: 25 },
    { island: "Island C", amount: 40 }
];
// Tính tổng lượng thịt tiêu thụ ở 3 đảo
const totalAmount = meat.reduce((total, island) => {
    return total + island.amount;
}, 0);

const averageAmount = totalAmount / currentHakiLevel;

const remainAmount = totalAmount % currentHakiLevel;

console.log(` Lượng thịt còn dư sau khi chia đều cho 3 thành viên cốt cán: ${remainAmount}`);
