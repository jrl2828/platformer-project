// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`280008000404040401040404040404040401010404040404040404040404040101010404040401040401040404020403030404030303010101010101010104010101010202030303040301010404030301030404040401030401040403030404040404040402020404030301010104040404010101010304040304040304040304040301040304010104030403030404040303010404040303040402020403040404040203040403040204040404030103040403010301010103040101010103040101040201010301040404040401010101050303040401040101010302010101010202040404040404040401010204040403040403020204030301010203040403030203020202040404040303010104040404040404040303040404040304040202040304010104040401030404040303030304040404040303040404030403040404`, img`
........................................
........................................
........................................
........................................
........................................
......2.................................
........................................
2222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
