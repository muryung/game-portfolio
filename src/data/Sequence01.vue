<template>
    <div>
        <Modal :is-visible="isModalVisible" :image-src="modalImageSrc" @close="closeModal" />
        
        <div class="paragraph">
        <strong>TwinToWin</strong>은 두 캐릭터가 번갈아 가면서 스테이지를 클리어하면 되는 게임입니다.
        <br/>제작 기간은 2023년 09월 부터 2023년 10월 까지입니다.
        </div>
        <div class="paragraph center">
            <img class="project-main-img" @click="openModal('img/projects/Sequence-01-2.png')" src="img/projects/Sequence-01-2.png" alt="main img" style="width: 75%;"/>
        </div>
        <div class="paragraph center">
            <a href="https://github.com/Hyunsoo218/TwinToWin" target="_blank"><img src="img/projects/github-mark.png" alt="Github logo" style="width: 5%;"/></a>
        </div>
        <hr/>

        <div class="paragraph center">
            <img class="phone-screenshot" src="img/projects/Sequence-01-3.png" alt="Optimistic Chubby Screenshot" />
            <img class="phone-screenshot" src="img/projects/Sequence-01-4.png" alt="Optimistic Chubby Screenshot" />
            <img class="phone-screenshot" src="img/projects/Sequence-01-5.png" alt="Optimistic Chubby Screenshot" />
        </div>
        <hr/>

        <div class="paragraph center">
            <img class="phone-screenshot" src="img/projects/Sequence-01-6.png" alt="Optimistic Chubby Screenshot" />
        </div>
    </div>


</template>

<script lang="ts">
import Modal from "@/components/ImageModal.vue";

export default {
    data() {
        return {
            isModalVisible: false,
            modalImageSrc: ""
        };
    },
    methods: {
        openModal(src: string) {
            this.isModalVisible = true;
            this.modalImageSrc = src;
        },
        closeModal() {
            this.isModalVisible = false;
            this.modalImageSrc = "";
        }
    },
    components: {
        Modal
    }
};
</script>