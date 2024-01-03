import { Inter, Lusitana, Waiting_for_the_Sunrise } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });  // 使用Inter函数从inter库中导入一个Inter字体对象，Inter()接受一个配置对象作为参数，这里的配置指定了只导入"latin"字符子集。然后将导入的Inter字体对象赋值给inter这个常量，这样就可以在其他地方通过inter常量使用这个Inter字体对象了

export const lusitana = Lusitana({
    weight:['400', '700'],
    subsets:['latin'],
})

export const waiting_for_the_Sunrise = Waiting_for_the_Sunrise({ 
    weight:['400'],
    subsets:["latin"],
})