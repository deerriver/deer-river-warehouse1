#如何优化时间（运行次数）
#优化规则
#存储下棋后 能否用数据结构 逆程序一步步下回去

#无聊了下个井字棋(设置函数版)
import random
#二维数组 如何定义 长度 m代表子列表的数字个数，n代表子列表个数
def chessboard(m,n):
    x=[[1]*m for _ in range(n)]
    print(x)
    #return:把函数结果返还
    return x

#下棋 机器2   
def chess2(j):
    #下棋 机器
    list3=[]
    for i, item in enumerate(x):
        if 1 in item:
            p=("{}{}".format(i,item.index(1)))
            #print(p)
            list3.append(p)
    #print(list3)
    q=random.randint(0,2)
    h=list3[q][0]
    i=list3[q][1]
    x[int(h)][int(i)]=j
    print(x)
    print(h,i)
    return(int(h),int(i))
    #return h,i

      
#下棋 人0
def chess(h,i,j):
    while j==0:
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


def rule(r,j,i):#循环就可以（试试！如果超出棋盘用判断退出
     #行赢
    list4=[0]
    it=iter(list4)
    for l in it:
        if x[r][l]==j and x[r][l+1]==j and x[r][l+2]==j:
            print(f"{j}因行获胜")
            return j
        #列赢
    #迭代器只能前进不能后退
    it2=iter(list4)
    for q in it2:    
        if x[q][i]==j and x[q+1][i]==j and x[q+2][i]==j:
            print(f"{j}因列获胜")
            return j
        #斜线赢
    it3=iter(list4)
    it4=iter(list4)
    for n in it3:
        for m in it4:
            if x[n][m]==j and x[n+1][m+1]==j and x[n+2][m+2]==j:
                print(f"{j}因斜线获胜")
                return j
            if x[n][m+2]==j and x[n+1][m+1]==j and x[n+2][m]==j:
                print(f"{j}因斜线获胜")
                return j       
#定义一个函数直接return然后返回一个值 写一个条件然后 break


def che():
   list=[]
   list2=[]
   for f in range(0,3):
        for g in range(0,3):
            while x[f][g]==1:
                #和电脑下 缺乏输入 阻塞 读走 输入 
                a = int(float(input()))
                b = int(float(input()))

                sa=chess(a,b,0)
                list.append(sa)
                print(f"0下棋储存是{list}\n")
                ret1=rule(a,0,b)
                if ret1==0:
                    print("game over\n",list+list2)
                    return list,list2
                
                sa2=chess2(2)
                h=sa2[0]
                i=sa2[1]
                print(sa2)
                list2.append(sa2)
                print(f"2下棋储存是{list2}\n")
                ret2=rule(h,2,i)
                if ret2==2:
                    print("game over\n",list+list2)
                    return list,list2

#新x 全作用（函数内部变量是局部的 函数内部才能看到）
x=chessboard(3,3) 
o=che()

