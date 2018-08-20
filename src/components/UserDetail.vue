<template>
  <div class="g-user-detail">
    <main>
      <SimpleRow className="u-row" name="个人照片">
        {{msg}}
      </SimpleRow>
    </main>
  </div>
</template>
<script>
import SimpleRow from '@/components/SimpleRow'
import UserHeader from '@/components/UserHeader'
export default {
  props: [ 'msg' ],
  data() {
    return {
      person: {}
    }
  },
  components: {
    SimpleRow, UserHeader
  }
}
</script>
<style lang="scss" scoped>
.g-edit {
  padding-top: .65rem;
  margin: auto;
  padding-bottom: 1rem;
}
.flexable {
  display: flex;
  padding-left: .4rem;
  padding-right: .5rem;
  &.space {
    justify-content: space-between;
  }
}
.u-row {
  margin: .4rem 0;
}
.m-photo {
  align-items: center;
  .upload {
    margin-left: .8rem;
    position: relative;
    .upload-btn {
      width: 1rem;
      height: .5rem;
      line-height: .5rem;
      display: block;
      text-align: center;
      color: white;
      background-color: #a8c6da;
      font-size: .2rem;
    }
  } 
}
.u-input {
  flex: 1;
  border: 1px solid #b5b5b5;
  border-radius: 0;
  padding-left: .08rem;
  height: .4rem;
  line-height: .4rem;
  font-size: .2rem;
  appearance: none;
  &.u-input1of3 {
    width: 28%;
    flex: none;
  }
}
textarea[class="u-input"] {
  height: 1rem;
  line-height: 1.4;
  resize: none;
}
.save-btn {
  width: 1rem;
  height: .5rem;
  line-height: .5rem;
  margin: auto;
  display: block;
  text-align: center;
  color: white;
  background-color: #a8c6da;
  font-size: .2rem;
}
.u-upload-component {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
  z-index: 100;
  .close-modal {
    color: white;
    font-size: .28rem;
    position: absolute;
    right: .2rem;
    top: .2rem;
  }
  .u-upload {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .btn {
      width: 1.5rem;
      line-height: .5rem;
      height: .5rem;
      display: inline-block;
      font-size: .2rem;
      color: white;
      margin: .2rem .2rem;
      &.cancel {
        background-color: #a8c6da;
      }
      &.submit {
        background-color:red;
      }
    }
  }
}
</style>
