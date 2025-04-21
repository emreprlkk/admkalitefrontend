 
 
import { ExcelJsonProvider } from './ExcelJsonProvider'
import { DataProvier } from './DataProvider'


export const MergeProvider =({children})=>{

 return (

<ExcelJsonProvider>
<DataProvier>
    {children}
</DataProvier>

</ExcelJsonProvider>

 )

}