<template>
<div class="box">
	<ul class="jigsaw-wrap">
		<li v-for="(item, index) in jigsaws" :class="{'jigsaw': true, 'jigsaw-empty': !item}"
    :key="index" @click="moveFn(index)" >{{item}}</li>
	</ul>
	<button class="btn btn-warning btn-block btn-reset" @click="again">重置游戏</button>
</div>
</template>

<script>
export default {
	data () {
		return {
			jigsaws: []
		}
	},
	methods: {
		// 重置渲染
		render () {
      let jigsawArr = []
			let	i = 1
			// 生成包含1 ~ 15数字的数组
			for (i; i < 16; i++) {
				jigsawArr.push(i)
			}
			// 随机打乱数组
			jigsawArr = jigsawArr.sort(() => {
				return Math.random() - 0.5
			})
      console.log('this.jigsaws', this.jigsaws, jigsawArr)
			// 页面显示
			this.jigsaws = jigsawArr
			this.jigsaws.push('')
		},
		// 点击方块
		moveFn (index) {
			// 获取点击位置及其上下左右的值
			let curNum = this.jigsaws[index]
			let	leftNum = this.jigsaws[index - 1]
			let	rightNum = this.jigsaws[index + 1]
			let	topNum = this.jigsaws[index - 4]
			let	bottomNum = this.jigsaws[index + 4]
			// 和为空的位置交换数值
			if (leftNum === '' && index % 4) {
        this.$set(this.jigsaws, index - 1, curNum)
        this.$set(this.jigsaws, index, '')
			} else if (rightNum === '' && index % 4 !== 3) {
        this.$set(this.jigsaws, index + 1, curNum)
        this.$set(this.jigsaws, index, '')
			} else if (topNum === '') {
        this.$set(this.jigsaws, index - 4, curNum)
        this.$set(this.jigsaws, index, '')
			} else if (bottomNum === '') {
        this.$set(this.jigsaws, index + 4, curNum)
        this.$set(this.jigsaws, index, '')
			}
			this.passFn()
		},
		// 校验是否过关
		passFn () {
			if (this.jigsaws[15] === '') {
				const newjigsaws = this.jigsaws.slice(0, 15)
				const isPass = newjigsaws.every((e, i) => e === i + 1)
				if (isPass) {
					alert('恭喜，闯关成功！')
				}
			}
		},
    again () { // 重置游戏
      this.render()
    }
	},
	created () {
		this.render()
	}
}
</script>

<style>
/* @import url('./assets/css/bootstrap.min.css'); */

body {
	font-family: Arial, "Microsoft YaHei";
}

.box {
	width: 400px;
	margin: 50px auto 0;
}

.jigsaw-wrap {
	width: 400px;
	height: 400px;
	margin-bottom: 40px;
	padding: 0;
	background: #ccc;
	list-style: none;
}

.jigsaw {
	float: left;
	width: 100px;
	height: 100px;
	font-size: 20px;
	background: #f90;
	text-align: center;
	line-height: 100px;
	border: 1px solid #ccc;
	box-sizing: border-box;
	box-shadow: 1px 1px 4px;
	text-shadow: 1px 1px 1px #B9B4B4;
	cursor: pointer;
}

.jigsaw-empty {
	background: #ccc;
	box-shadow: inset 2px 2px 18px;
}

.btn-reset {
	box-shadow: inset 2px 2px 18px;
}
.btn-warning {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
}
.btn-block {
    display: block;
    width: 100%;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    text-decoration: none;
    outline: none;
}
</style>
