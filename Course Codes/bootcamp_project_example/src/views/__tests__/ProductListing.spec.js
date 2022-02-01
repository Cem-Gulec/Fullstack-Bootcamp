import { shallowMount } from '@vue/test-utils'
import ProductListingPage from "@/views/ProductListingPage";
import Header from "@/components/Header";

describe('ProductListingPage.vue', () => {
    it("should component exists", () => {
        const wrapper = shallowMount(ProductListingPage)
        expect(wrapper.exists()).toBeTruthy()
    })
    it("header exists", () => {
        const wrapper = shallowMount(ProductListingPage)
        const header = wrapper.findComponent(Header)
        expect(header.exists()).toBeTruthy()
    })
})
