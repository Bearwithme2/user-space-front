<template>
  <div>
    <b-form-group label="Name">
      <b-skeleton type="input" />
    </b-form-group>

    <b-form-group label="Surname">
      <b-skeleton type="input" />
    </b-form-group>

    <b-form-group label="Email">
      <b-skeleton type="input" />
    </b-form-group>

    <b-form-group label="Password">
      <b-skeleton class="w-50" type="input" />
    </b-form-group>
    <b-skeleton class="mt-3" type="button" />
  </div>
</template>

<script>
export default {
  name: "UserFormSkeleton"
};
</script>
