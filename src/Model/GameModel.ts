import { ErrorMsg } from '../Constants/ErrorEnum'
class Playground {
    column: number
    row:number
    valueList: string[] 
    showList: string[]
    errorMessage: string
    constructor(){
        this.row = 8 // 請
        this.column = 4
        this.valueList = ['A','B','C','D','E','F','G','F']
        this.showList = []
        this.errorMessage = " "
    }

    setShowList(){
        // 總數
        let totalNum = this.row* this.column
        // 顯示幾種value(4為每種字母出現兩次的情況)
        let showValueCategoryNum = totalNum / 4
        
        this.showList  = this.valueList.splice(0,showValueCategoryNum)

    }
}



export let game = new Playground()

