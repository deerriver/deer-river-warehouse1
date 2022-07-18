#修复bug跳棋 储存下棋
#突破和计算机下棋

#需要突破一次性找空位的问题
#如何优化时间（运行次数）
#优化规则
#存储下棋后 能否用数据结构 逆程序一步步下回去

#解决for带来的游戏不结束问题(定义函数 不要break)
#把复杂问题拆分成原子动作
#联想：把相同的东西存储到一起 总结 
#+=/-=

#无聊了下个井字棋(设置函数版)
import random

#二维数组 如何定义 长度 m代表子列表的数字个数，n代表子列表个数
def chessboard(m,n):
    x=[[1]*m for _ in range(n)]
    print(x)
    return x
#return:把函数结果返还

#下棋 机器
def chess(h,i,j,k):
    while k==0 or k==2:
        if x[h][i]==1:
            x[h][i]=j
            print(x)
            print(h,i)
            return(h,i)
        else:
            h=random.randint(0,2)
            i=random.randint(0,2)
      
#下棋 人2
def chess2(h,i,j,k):
    while k==0:
        if h in range(0,3) and i in range(0,3):
            if x[h][i]==1:
                x[h][i]=j
                print(x)
                print(h,i)
                return(h,i)
            else:
                print("您的棋子无效，请重下")
                h = int(float(input()))
                i = int(float(input()))
        else:
                print("您的棋子无效，请重下")
                h = int(float(input()))
                i = int(float(input()))
        


       
def rule(k,i):#循环就可以（试试！如果超出棋盘用判断退出
     #行赢
    if x[0]==[k,k,k] or x[1]==[k,k,k] or x[2]==[k,k,k]:
        print(f"{k}因行获胜")
        return k
        #列赢
    if x[0][i]==k and x[1][i]==k and x[2][i]==k:
        print(f"{k}因列获胜")
        return k
        #斜线赢
    if x[0][0]==k and x[1][1]==k and x[2][2]==k:
        print(f"{k}因斜线获胜")
        return k
    if x[0][2]==k and x[1][1]==k and x[2][0]==k:
        print(f"{k}因斜线获胜")
        return k

        
#定义一个函数直接return然后返回一个值 写一个条件然后 break
def che():
   list=[]
   list2=[]
   for f in range(0,3):
        for g in range(0,3):
            while x[f][g]==1:
                d=random.randint(0,2)
                e=random.randint(0,2)
                #和电脑下 缺乏输入 阻塞 读走 输入 
                a = int(float(input()))
                b = int(float(input()))
                sa=chess2(a,b,0,0)
                list.append(sa)
                print(f"0下棋储存是{list}\n")
                ret1=rule(0,b)
                if ret1==0:
                    print("game over\n",list+list2)
                    return list,list2
           
            
                sa2=chess(d,e,2,2)
                list2.append(sa2)
                print(f"2下棋储存是{list2}\n")
                ret2=rule(2,e)
                if ret2==2:
                    print("game over\n",list+list2)
                    return list,list2

#新x 全作用（函数内部变量是局部的 函数内部才能看到）
x=chessboard(3,3) 
o=che()

