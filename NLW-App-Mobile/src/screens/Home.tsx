import { View, Text, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";


import { Header } from "../components/Header";
import { day_size, HabitDay } from "../components/HabitDay";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStar = generateRangeDatesFromYearStart();
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStar.length;

const nome = 'Hello World';
console.log(nome);

export function Home(){

    const {navigate } = useNavigation()

    return(
    <View className="flex-1 bg-background px-8 pt-16">
        <Header/>

            <View className="flex-row mt-6 mb-2">
                {
                    weekDays.map((weekDay, i)=>(
                        <Text key={`${weekDay}-${i}`}
                        className="text-zinc-400 text-xl font-bold text-center mx-1 "
                        style={{width: day_size}}>
                            {weekDay}
                        </Text>
                    ))
                }
            </View>
            
        <ScrollView 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle = {{paddingBottom: 100}}>

            <View className="flex-row flex-wrap">
                {
                    datesFromYearStar.map(date=>(
                        <HabitDay key={date.toISOString()}
                        onPress={()=>navigate('habit',{date:date.toISOString()})}
                        />
                    ))
                }

                {
                    amountOfDaysToFill > 0 && Array
                    .from({ length: amountOfDaysToFill})
                    .map((_, index)=>(
                        <View 
                        key={index}
                        className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                        style={{ width: day_size, height:day_size}}/>
                    ))
                }
            </View>
        </ScrollView>


    </View>    
    )
}