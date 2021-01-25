const Item = artifacts.require("./Item.sol");
const ItemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager", accounts => {
it("... should let you create new Items.", async () => {
    const itemManagerInstance = await ItemManager.deployed();
    const itemName = "Ariel";
    const itemPrice = 500;
        
    const result = await itemManagerInstance.createItem(itemName, itemPrice, { from: accounts[0] });
    assert.equal(result.logs[0].args._itemIndex, 0, "There should be one item index in there")
     item = await itemManagerInstance.items(0);
    assert.equal(item._identifier, itemName, "Check the same name in the Item");
});
});
