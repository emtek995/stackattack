<script lang="ts">

    let input: string = 'derp';

    const butt = async () => {
        await fetch('api', {
            'method': 'DELETE',
            'body': input,
        })
    }

</script>

<input class="input" type="text" name="" id="" bind:value={input} />
<button on:click|preventDefault={butt} class="but">Derp</button>

<style>
    .input {
        border-radius: 0.5rem;
    }
    .but {
        border-radius: 0.5rem;
    }
</style>
