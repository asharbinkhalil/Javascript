function switchCase(val)
{
    switch(val)
    {
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
            break;
        default:
            return "Invalid";
            break;
    }
}
// console.log(switchCase(1))
// console.log(switchCase(2))
// console.log(switchCase(9))

function sequetialSizes(val)
{
    switch(val)
    {
        case 1:
        case 2:
        case 3:
            return "Low";
            break;
        case 4:
        case 5:
        case 6:
            return "Mid";
            break;
        case 7:
        case 8:
        case 9:
            return "High";
            break;
    }
}
console.log(sequetialSizes(1))
console.log(sequetialSizes(2))
console.log(sequetialSizes(3))
console.log(sequetialSizes(4))
