<template>
  <div class="hello">
    <Homes></Homes>
    <Slider :value.sync="value" range></Slider>
    <Upload action="//jsonplaceholder.typicode.com/posts/" multiple>
        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>


    <Row>
        <Col span="12">
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>

    <Transfer
        :data="data1"
        :target-keys="targetKeys1"
        :render-format="render1"
        @on-change="handleChange1"></Transfer>

        <Button type="primary" @click="open(false)">Open notice</Button>
    <Button @click="open(true)" >Open notice(only title)</Button>
    <Tree :data="data2" show-checkbox></Tree>

    <Tabs>
        <TabPane label="macOS" icon="social-apple">标签一的内容</TabPane>
        <TabPane label="Windows" icon="social-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="social-tux">标签三的内容</TabPane>
    </Tabs>


    <button @click="increment">加</button>
    <span>{{count}}</span>
    <button @click="decrement">减</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Homes from "./home";
export default {
  name: "HelloWorld",
  components: {
    Homes
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      value: [20, 50],
      data1: this.getMockData(),
      targetKeys1: this.getTargetKeys(),
      data2: [
        {
          title: "parent 1",
          expand: true,
          children: [
            {
              title: "parent 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1"
                },
                {
                  title: "leaf 1-1-2"
                }
              ]
            },
            {
              title: "parent 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1"
                },
                {
                  title: "leaf 1-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState(["count"])
    // ...mapGetters(["count"])
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
    // increment() {
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   this.$store.commit("decrement");
    // },
    getMockData() {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: "Content " + i,
          description: "The desc of content  " + i,
          disabled: Math.random() * 3 < 1
        });
      }
      return mockData;
    },
    getTargetKeys() {
      return this.getMockData()
        .filter(() => Math.random() * 2 > 1)
        .map(item => item.key);
    },
    render1(item) {
      return item.label;
    },
    handleChange1(newTargetKeys, direction, moveKeys) {
      console.log(newTargetKeys);
      console.log(direction);
      console.log(moveKeys);
      this.targetKeys1 = newTargetKeys;
    },
    open(nodesc) {
      this.$Notice.open({
        title: "Notification title",
        desc: nodesc
          ? ""
          : "Here is the notification description. Here is the notification description. "
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
