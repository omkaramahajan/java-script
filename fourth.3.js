let items=[250,645,300,900,50]
let i=0;
for (val of items)
{
    let offer=val/10;
    items[i]-=offer;
    console.log("value of items"+items[i]);
    i++;
}